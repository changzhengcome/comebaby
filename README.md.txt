## vue-cli3��Ŀ�����
node >= 8.9 
ȫ�ְ�װvue
npm install -g @vue/cli
������Ŀ
vue create vue-demo
* node_modules  �ļ���  ��Ŀ����(��webpack�����˷�װ)
* public �ļ���
1.favicon.ico  �� ��վͼ��
2.index.html  ҳ������ļ�
* src �ļ���
  main.js  ���js
  assets  ��ž�̬�ļ�
  components ��Ź������
  App.vue ���vue�ļ�
* .eslintrc.js ����
* .gitignore ָ���ļ������ύ��git��
*  balel.config.js ʹ��һЩԤ��
* package.json ��Ŀ����������
* package-lock.json �汾����ʹ�õ��ļ�
.����������

```npm run dev``` // ��������

```npm run test``` // ���Ի���

```npm run build``` // ��ʽ�������

```npm run build:test```  // ���Ի������
��vue��Ŀ�У��ͺ�̨������ȡ������飬����ͨ��ʹ�õ���axios�⣬���ǻ���promise��http�⣬��������������˺�node.js�С����кܶ���������ԣ����������������Ӧ��ȡ������ת��json���ͻ��˷���XSRF��
 npm install axios --save
* ��װvuex
npm install vuex -S
��assets���½������ļ�������Ĵ������н�������

    * common.scss ��Ҫ��Ź�������ʽ

    * mixin.scss ��Ż�����ʽ

    * reset.scss ���������ʽ��

    * variable.scss ��ű���
��app.vue������reset.scss�ļ�����ɺ���ʽ���ɽ���ȫ�ֵ����ˡ�

    �ƶ�����������
 npm i px2rem --save-dev
ʹ��vant ��ܱ�д����
npm i babel-plugin-import -D ����Ҫ�������

