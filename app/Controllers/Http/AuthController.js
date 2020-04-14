'use strict'
// const suid = require('rand-token').suid;
const Mail = use('Mail')
const User = use('App/Models/User');
const Hash = use('Hash')
const Database = use('Database')

class AuthController {
  async userRegister({ request, auth, response }) {
    const data = request.all()
    // return data

    // console.log('sob or lagi same', data)

    if (data.image == null) {
      //   data.img = `/uploads/1570001800812.png`
    }

    let user = await User.create(data)
    let accessToken = await auth.generate(user)
    return response.status(200).json({
      'success': true,
      'message': 'Registration Successfull please complete second step',
      "user": user,
      "token": accessToken.token
    })
  }
  async userLogin({ request, auth, response }) {
    const email = request.input("email")
    const password = request.input("password");
    const app_token = request.input('app_Token')
    try {
      if (await auth.attempt(email, password)) {
        let user = await User.findBy('email', email)
        let accessToken = await auth.generate(user)
        // let cannadrive = await Cannadrive.query().where('userId', user.id).first()
        // if (user.userType != 2) {
        //   return response.json({
        //     'success': false,
        //     'messeage': 'You are not a driver!'
        //   })
        // }
        await User.query().where('id', user.id).update({
          "app_Token": app_token,
          "token": accessToken.token,
          "app_Token": request.body.app_Token ? request.body.app_Token : ''
        })
        return response.status(200).json({
          'success': true,
          'message': 'Login Complete Successfully ! ',
          "user": user,
          //   'cannadrive': cannadrive,
          "token": accessToken.token
        })
      }

    } catch (e) {
      return response.json({
        'success': false,
        'message': e,
      })
    }
  }

}

module.exports = AuthController
