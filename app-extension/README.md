# Quasar App Extension quas-tom

> Add a short description of your App Extension. What does it do? How is it beneficial? Why would someone want to use it?

[![npm](https://img.shields.io/npm/v/quasar-app-extension-quas-tom.svg?label=quasar-app-extension-quas-tom)](https://www.npmjs.com/package/quasar-app-extension-quas-tom)
[![npm](https://img.shields.io/npm/dt/quasar-app-extension-quas-tom.svg)](https://www.npmjs.com/package/quasar-app-extension-quas-tom)

# Install
```bash
quasar ext add quas-tom
```
Quasar CLI will retrieve it from NPM and install the extension.

## Usage

Replace any instance of `<q-btn>` with `<q-t-btn>`.
Now you can control the default appearance of your btn in your quasar.conf.js
```javascript
// quasar.conf.js

return {
  framework: {
    config: {
      QuasTom: {
        QTBtn: {
          rounded: true,
        }
      },
    }
  }
}
```

# Uninstall
```bash
quasar ext remove quas-tom
```

# Info
> Add longer information here that will help the user of your app extension.

# Other Info
> Add other information that's not as important to know

# Contribute
[Github](https://github.com/garhbod/quas-tom)

# Donate
If you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Ryan Worth <ryan.design@live.com>
