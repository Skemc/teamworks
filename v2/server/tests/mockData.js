let mock = {
    signups: {
        firstName: 'Skemc',
        lastName: 'karek',
        email: 'eric123@gmail.com',
        password: '$2b$10$hjXgNwYIzx8Hxeg.silh3usMzPF.TGMV3lMY55LACDhv19TnrtrMW',
        address: 'Kigali',
        jobRole: 'manager',
        department: 'it',
        gender: 'male'
    },
    signins: {
        email : "eric6@gmail.com",
        password: "Rwanda000" 
    },
    wrongPassword: {
        email: "eric6@gmail.com",
        password : "Thvbjnklnkljbhj11"
    },
    wrongEmail: {

    }, 
    wrongAccount: {
        email: 'eric123@gmail.com',
        password: "Rwanda000" 
    }  
};
export default mock;