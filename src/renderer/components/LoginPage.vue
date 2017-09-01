<template>
  <div>
    <div class="bg">
      <div class="rounded"></div>
    </div>
    <div class="pattern"></div>
    <div class="login_wrapper">
      <img src="static/svg/login_logo.svg">
      <h1>Log ind</h1>
      <div class="login">
        <p id="error_username"></p>
        <input type="text" name="userName" v-model="userName" placeholder="Brugertitel">
        <p id="error_password"></p>
        <input type="text" name="userKey" v-model="userKey" placeholder="Brugernøgle">
        <div style="margin-bottom: 40px; text-align: center;">
          <div class="col-md-12">
            <p id="status"></p>
            <input id="Gem" v-model="save" type="checkbox" name="" value="">
            <label for="Gem">Gem loginoplysninger</label>
          </div>
        </div>
        <div class="login_button" @click="Verify()">
          <p>LOG IND</p>
          <img src="static/svg/arrow-right2.svg">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: 'verify-view',
  data() {
    return {
      userName: "",
      userKey: "",
      user: {},
      save: true,
      saved: false,
      indstillinger: {},
    }
  },
  beforeRouteEnter: (to, from, next) => {
    if (!this.loaded) {
      this.loaded = true;
      next();
    } else {
      next();
    }
  },
  created() {
    Database.FindAll("indstillinger").then((result) => {
      if (this.user) {
        this.saved = true;
        this.userName = this.user.userName;
        this.userKey = this.user.userKey;
      }
    });
  },
  methods: {
    AttachUpdateHandlers() {

      // updater.on('update-available', onUpdateAvailable);
      // updater.on('update-downloading', onUpdateDownloading);
      // updater.on('update-downloaded', onUpdateDownloaded);

      // function onUpdateAvailable(meta) {
      //   //setText('new-version', meta.version);
      //   //setText('description', meta.readme);
      //   //document.body.className = 'update-available';
      //   this.updateAvailabe = meta.version;
      // }

      // function onUpdateDownloading() {
      //   //document.body.classList.add('update-downloading');
      //   this.updateAvailabe = "update-downloading";
      // }

      // function onUpdateDownloaded() {
      //   if (window.confirm('The app has been updated. Do you like to restart it now?')) {
      //     updater.quitAndInstall();
      //   }
      // }
    },
    Verify() {

      var url = "http://compliancecorerest.azurewebsites.net/userapi/VerifyUser?";
      var params = "username=" + this.userName + "&userKey=" + this.userKey + "&VerifiedBy=" + "Beta";

      console.log("logging in with:", "username=" + this.userName, "userKey=" + this.userKey);
      $("#status").text("logger ind...");

      var jqxhr = $.get(url + params)
        .done((e) => {
          console.log("done", e);
          if (!e) {
            console.log("failed: ", e);
            $("#status").text("Ingen match!");
          } else {
            console.log("success: ", e);
            $("#status").text("log ind successfuldt");
          }
        })
        .fail((e) => {
          console.log("error", e);
          $("#status").text("fejlbesked!");
          //implementer logging
        })
        .always((e) => {
          console.log("finished", e);
          this.Goto();
        });
    },
    Goto() {
          console.log("Gå til forside");
      this.$router.push('/home')
    },
    SaveUser() {
      Database.Insert("indstillinger", { type: "login", userName: this.userName, userKey: this.userKey }).then(result => {
        console.log("User saved");
      })
    }
  }
}
</script>


<style lang="scss">
@import "static/scss/mixins.scss";
.bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 500px;
  background: url("/static/svg/background3.svg") bottom center no-repeat;
  background-size: cover;
  z-index: 2;
}

.pattern {
  background: url("/static/svg/icon_pattern.svg");
  position: absolute;
  top: 0;
  left: 0;
  height: 80vh;
  width: 100%;
  z-index: 1;
  opacity: .2;
}

.login_wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 295px;
  z-index: 999;
  img {
    width: 120px;
    height: auto;
    margin: 70px auto 45px auto;
    display: block;
  }
  h1 {
    margin: 0 0 50px 0;
    font-size: 20pt;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 5px;
    text-align: center;
    text-transform: uppercase;
  }
  .login {
    width: 280px;
    text-align: center;
    margin: 0 auto;
     ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #b3b3b3;
      font-family: 'Montserrat', sans-serif;
      font-weight: 200;
    }
    input[type="text"] {
      background: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 25px;
      margin-bottom: 10px;
      width: 100%;
      display: block; //margin-bottom: 20px;
      outline: 0;
      font-size: 11pt;
      letter-spacing: 2px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
      border: 2px solid #f9f9f9;
      transition: box-shadow .2s linear;
    }
    .login_button {
      padding: 8px 15px;
      background: #fff;
      border-radius: 25px;
      display: inline-block;
      margin-top: 20px;
      box-shadow: 0px 0px 28px 8px rgba(0, 0, 0, 0.04);
      cursor: pointer;

      p {
        margin: 0;
        display: inline;
        float: left;
        font-size: 8pt;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        letter-spacing: 2px;
        color: #000;
      }

      img {
        width: 17px;
        height: auto;
        display: inline;
        float: left;
        margin: -2px 0 0 8px;
      }
    }
    input[type=text]:active,
    input[type=text]:focus {
      box-shadow: 2px 0px 14px 0px rgba(0, 0, 0, 0.09);
    }
    label {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      text-align: center;
      color: #424242;
      letter-spacing: 1px;
      font-size: 9pt;
    }
    p {
      color: $pink;
      text-align: center;
      letter-spacing: 1px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 300;
    }
  }
}
</style>
