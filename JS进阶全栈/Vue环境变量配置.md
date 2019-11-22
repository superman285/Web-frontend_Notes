.local不会被git跟踪



**vue-cli-service build (--mode production)** 会加载可能存在的 .env、.env.production 和 .env.production.local 文件然后构建出生产环境应用；

**vue-cli-service build --mode test** 会在 staging 模式下加载可能存在的 .env、.env.test 和 .env.test.local 文件然后构建出生产环境应用。

**vue-cli-service build --mode development** 会在 staging 模式下加载可能存在的 .env、.env.development 和 .env.development.local 文件然后构建出生产环境应用。



==注意💡==

vue代码中想访问到env文件中的全局变量，必须必须加上VUE_APP_



看来不应该用development环境打包 而是应该用production环境的自定义模式打包

NODE_ENV一致 都为production 各种配置一致 只有部分变量不同



切记切记: .env.development的 NODE_ENV一定要配置为development 否则npm run serve都会按照别的标准来 会报大小超过的bug



npm run build

代表 npm run build --mode production



env.development 用于 npm run serve

env.test 用于 npm run test时



打包时再自定义所需模式





配置多个env

.env.development | .env.production | .env.test

自定义部署上线时候的dev

.env.product_test | .env.product_dev | .env.product_super自定义

NODE_ENV 环境都为production



npm run build --mode (env后的文件名)