parcel
类似webpack的web打包工具

npx parcel index.html
npx parcel watch index.html

两者区别
- parcel只是能自动刷新(任何修改都自动响应)，没有真正编译(build)，临时文件放在cache中
- parcel watch的作用是每次改动都能立马响应，而且是真正的编译了(build)，而不是临时的
watch的作用相当于每次更改自动帮你build