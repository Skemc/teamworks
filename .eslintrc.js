module.exports = 
{   
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes":0,
        "no-console":"off",
        "no-undef":"off",
        "max-len": 0,
        "import/newline-after-import":"off",
        "no-unused-vars":0
    }
}