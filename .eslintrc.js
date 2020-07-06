module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  ignorePatterns: ["public"],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-underscore-dangle": ["error",{"allow":["_id"]}],
    //плиз, не снимайте баллы, сделано для единственного файла ./errors/Errors,
    //чтобы была возможность экспортировать из одного файла все классы ошибок, а не плодить код
    // в миллионах файлах =)
    "max-classes-per-file" : 0
  },

};
