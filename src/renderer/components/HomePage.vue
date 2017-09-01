<template>
    <page>
        <template slot="content">
            <div class="container">
                <div class="row">
                    <section class="col-md-4">
                        <div class="block" id="nyheder">
                            <h4 class="title">Nyheder</h4>
                            <div class="news">
                                <h5>Brug for juridisk vejledning? - kontakt Focus-Advokater</h5>
                                <p>Kontakt advokat Jesper Løffler (certificeret IT-advokat og phd.) - Jesper har erfaring inden for praktisk compliance-arbejde og kommer med konkret og anvendelig vejledning</p>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-8">
                        <div class="block" id="kommende">
                            <h4 class="title">Kommende</h4>
                            <div id="chart" style="height:400px">
                                <bar-chart :options="chart.options" :chart-data="datacollection"></bar-chart>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-4">
                        <div class="block" id="udført">
                            <div class="title current-month-activity">
                                <h6>UDFØRT</h6>
                                <h4> {{currentMonth | month}}</h4>
                                <img @click="SetMonth(-1)" id="left" src="static/svg/arrow-left-white.svg">
                                <img @click="SetMonth(1)" id="right" src="static/svg/arrow-right-white.svg">
                            </div>

                            <div>
                                <p class="amount_month">Kontroller
                                    <span>{{data.kontroller | length}}</span>
                                </p>
                                <p class="amount_month">Henvendelser
                                    <span>{{udførteHenvendelserThisMonth | length}}</span>
                                </p>
                            </div>
                        </div>
                    </section>
                    <section class="col-md-8">
                        <div class="block" id="overblik">
                            <h4 class="title">Overblik</h4>
                            <table>
                                <tr>
                                    <td>
                                        <p class="number">{{data.kontroller | length}}</p>
                                        <p>kontroller</p>
                                    </td>
                                    <td>
                                        <p class="number">{{data.henvendelser | length}}</p>
                                        <p>henvendelser</p>
                                    </td>
                                    <td>
                                        <p class="number">{{data.fortegnelser | length}}</p>
                                        <p>fortegnelser</p>
                                    </td>
                                    <td>
                                        <p class="number">{{data.dokumenter | length}}</p>
                                        <p>dokumenter</p>
                                    </td>
                                    <td>
                                        <p class="number">{{data.procedurer | length}}</p>
                                        <p>procedurer</p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        </template>
    </page>
</template>

<script>
import bar from "./charts/bar"
export default {
    components: {
        "bar-chart": bar
    },
    data() {
        return {
            data: {
                kontroller: [],
                dokumenter: [],
                procedurer: [],
                fortegnelser: [],
                henvendelser: [],
            },
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Sep", "Nov", "Dec"],
            datacollection: {},
            currentMonth: moment(Date.now()).month(),
            currentYear: moment(Date.now()).year(),
            today: moment(Date.now()),
            endOfMonth: moment(this.today).endOf('month'),
            chart: {
                options: { responsive: true, maintainAspectRatio: false }
            }
        }
    },
    computed: {
        henvendelserThisMonth: function() {
            return this.data.henvendelser.filter((obj) => {
                return (obj.status == "Færdigbehandlet" && moment(obj.dateProcessed).month() == this.currentMonth);
            }).length;
        },
        udførteHenvendelserThisMonth: function() {
            let data = this.data.henvendelser.filter((obj) => {
                return (obj.status == "Færdigbehandlet" && moment(obj.dateProcessed).month() == this.currentMonth);
            });
            return data;
        },
        underkontroller: function() {
            let underkontroller = [];
            this.data.kontroller.forEach((kontrol) => {
                if (kontrol.underkontroller !== undefined) {
                    kontrol.underkontroller.forEach((underkontrol) => {
                        underkontroller.push({
                            date: moment(underkontrol.deadline)._d,
                            done: underkontrol.executed,
                            name: kontrol.titel
                        });
                    });
                }
            });
        },
        henvendelserGrouped: function() {
            return _.groupBy(this.data.henvendelser, obj => {
                return moment(obj.dateRecieved).format("MMM");
            })
        },
        chartDataHenvendelser: function() {
            let a = [];
            console.log(this.months)
            this.months.forEach((month) => {
                if (this.henvendelserGrouped[month] !== undefined) {
                    a.push(this.henvendelserGrouped[month].length)
                }
                else {
                    a.push(0)
                }
            });
            console.log(a)
            return a;
        }
    },
    filters: {
        length: function(array) {
            return array.length;
        },
        month: function(month) {
            return moment().month(month).format("MMMM");
        }
    },
    watch: {
        data: {
            handler: function(val, oldVal){
                console.log("Data changed")
            },
            deep:true
        },
        udførteHenvendelserThisMonth: function(val, oldVal) {
            console.log("udførteHenve", val, oldVal)
        },
    },
    created() {
        console.log("chart: ", this.chart)
        this.loadAll().then(result => {
            console.log("All data loaded");
            this.fillData();
        });
    },
    methods: {
        loadAll() {
            let promise = [];
            for (var key in this.data) {
                promise.push(this.load(key));
            }
            return Promise.all(promise);
        },
        load(type) {
            return Database.FindAll(type).then(result => {
                console.log(type + " loaded", result);
                this.data[type] = result;
            });
        },
        fillData() {
            this.datacollection = {
                labels: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "Oktober", "September", "November", "December"],
                datasets: [
                    {
                        label: 'kontroller',
                        backgroundColor: '#f87979',
                        data: [1, 32, 4, 2, 3, 43, 5]
                    }, {
                        label: 'henvendelser',
                        backgroundColor: '#f83179',
                        data: this.chartDataHenvendelser
                    }
                ]
            }
        },
        SetMonth(i) {
            if (i == 1) {
                this.currentMonth++;
            } else {
                this.currentMonth--;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "static/scss/mixins.scss";

section {
    padding-top: 15px;
}

.block {
    background: #f9f9f9;
    padding: 55px 15px 15px 15px;
    position: relative;
    border-radius: 12px;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.05);
    margin: 0 0 15px 0;
}

.title {
    font-size: 13pt;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 16px;
    background: #FF3366;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    letter-spacing: 2px;
    text-transform: uppercase;
}

h4 {
    font-size: 13pt;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    letter-spacing: 2px;
}

#kommende {
    height: 470px;
    .title {
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        font-weight: 300;
    }
}

#nyheder {
    height: 470px;
    .title {
        background: #FF3366;
    }
}

#overblik {
    height: 200px;
    padding-top: 90px;
    .title {
        background: rgb(255, 255, 255);
        color: rgb(0, 0, 0);
        font-weight: 300;
        padding: 32px 16px;
    }
    table {
        width: 100%;
        tr {
            width: 100%;
            text-align: center;
            display: table-row;
            .number {
                font-size: 35pt;
                font-family: 'Montserrat', sans-serif;
                font-weight: 600;
                margin-bottom: 0;
            }
            p {
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                font-size: 8pt;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
        }
    }
}

#udført {
    height: 200px;
    padding-top: 90px;
    .title {
        background: rgb(132, 130, 232);
        text-align: center;
        padding: 12px;
    }
    h6 {
        font-size: 8pt;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        letter-spacing: 2px;
    }
    img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
        cursor: pointer;
        width: 18px;
        &#left {
            left: 15px;
            right: auto;
        }
        &#right {
            left: auto;
            right: 15px;
        }
    }
    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 13pt;
        letter-spacing: 2px;
        margin: 16px 0;
    }
    span {
        float: right;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }
}
</style>
