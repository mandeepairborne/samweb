+++
insert_anchor_links = "right"
+++

{% crt() %}
```
      _          _          _          _          _
    >(')____,  >(')____,  >(')____,  >(')____,  >(') ___,
      (` =~~/    (` =~~/    (` =~~/    (` =~~/    (` =~~/
jgs~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~^`---'~^~^~
```
{% end %}

# Duckquill

Duckquill هو سمة عصرية وجميلة ونظيفة (ونظيفة) [Zola](https://www.getzola.org) التي تهدف إلى تبسيط عملية طرح مدونتك بشكل كبير. يهدف إلى توفير جميع الخيارات اللازمة للكتابة المريحة، مع الحفاظ على توازن البساطة.

قم بتحرير القليل من البيانات الوصفية وتعديل بعض الرسومات المضمنة واحصل على مدونة في دقائق!

- جميلة، لكنها خفيفة الوزن. لا يتم استخدام جافا سكريبت (باستثناء التعليقات).
- يتم تلوين الألوان باللون الأساسي الذي يختاره المستخدم للحصول على مظهر لطيف.
- حجمه 90 كيلو بايت تقريبًا؛ خذ هذا، 12 ميغابايت متوسط!
- يستخدم خطوط النظام لتحميل سريع للغاية.
- مناسب للجوال، مع متغير داكن مناسب.
- أيقونة مفضلة مناسبة للمتصفحات الحديثة وأيقونات أجهزة أبل.
- تويتر وماستودون وبطاقات تعريفية لوسائل التواصل الاجتماعي الأخرى لسهولة المشاركة. جرّب [ Share Preview](https://apps.gnome.org/SharePreview/) للاختبار.
- [تعليقات مدعومة من ماستودون](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/)؛ التعليق باستخدام خادم ActivityPub متوافق عن طريق الرد على منشور ماستودون.

> تم إنشاء Duckquill بناءً على احتياجات [موقع الويب الخاص بي](https://daudix.codeberg.page)، إذا كنت بحاجة إلى بعض الميزات/الإعدادات غير الموجودة فلا تتردد في فتح مشكلة أو الأفضل من ذلك، طلب سحب!

## التثبيت

أولاً، قم بتنزيل هذا القالب في دليل "themes" الخاص بك:

```sh
git clone https://codeberg.org/daudix/duckquill.git themes/duckquill
```

...أو إضافتها كوحدة فرعية لسهولة التحديث (يوصى بذلك إذا كان لديك بالفعل إعداد git في الموقع):

```sh
git submodule init
git submodule add https://codeberg.org/daudix/duckquill.git themes/duckquill
```

يوصى بشدة بالتبديل من الفرع "main" إلى الإصدار الأخير:

```sh
cd themes/duckquill
git checkout tags/v3.0.0
```

لتحديث الوحدة الفرعية، ما عليك سوى التبديل إلى علامة جديدة:

** ملاحظة:** تحقق من سجل التغيير لجميع الإصدارات التي جاءت بعد الإصدار الذي تستخدمه، فقد تكون هناك بعض التغييرات التي تحتاج إلى تدخل يدوي.

```sh
git submodule update --remote --merge
git tag --list
git checkout tags/v3.0.0
```

ثم، قم بتمكينه في 'config.toml':

```toml
theme = "duckquill"
```

## الخيارات

تقدم Duckquill بعض خيارات التهيئة لجعلها تناسبك بشكل أفضل؛ معظم الخيارات لها تعليقات وصفية جميلة، لذا يجب أن يكون من السهل فهم ما تفعله.

### أوراق الأنماط المخصصة

يمكنك إضافة الأنماط الخاصة بك أو تجاوز الأنماط الموجودة عن طريق إنشاء ورقة أنماط مخصصة وإضافتها في "config.toml":

```toml
[extra]
stylesheets = [
  "YOUR_STYLE.css"
]
```

أوراق الأنماط الإضافية؛ تتوقع أن تكون في الدليل " static". إذا كنت تستخدم Sass فسيتم تجميعها هناك على أي حال.

إذا لم تُحترم الفئة المتجاوزة لسبب ما، حاول استخدام '!important'. يمكنك استيراد الأنماط من Duckquill باستخدام:

```scss
@use "../themes/duckquill/sass/NEEDED_FILE.scss";
```

### اللون الأساسي

يحترم Duckquill اللون الأساسي المختار في كل مكان، ما عليك سوى تغيير اللون الأساسي في 'config.toml':

```toml
[extra]
primary_color = "COLOR_CODE"
primary_color_alpha = "COLOR_CODE"
```

## صفحات الاختبار

- [صفحة العرض التوضيحي](@/demo/index.ar.md)
- [حفلة الكعك!](@/demo/page.ar.md)
- [عرض توضيحي لتعليقات الأنشطة/التعليقات المتنوعة](@/demo/comments.ar.md)
- [عرض الكتلة البرمجية (يحتاج إلى Zola v0.18.0 والإصدارات الأحدث)](@/demo/code.ar.md)

## في البرية

<details>
  <summary>يبدأ في التطويل، لذا انقر للتوسيع.</summary>

- [agustinramirodiaz.github.io](https://agustinramirodiaz.github.io)
- [alavi.me](https://alavi.me)
- [bano.dev](https://bano.dev)
- [blog.pansi21.xyz](https://blog.pansi21.xyz)
- [daudix.codeberg.page](https://daudix.codeberg.page) <small>(من الواضح)</small>
- [daveparr.info](https://www.daveparr.info)
- [digital-horror.com](https://digital-horror.com)
- [enriquekesslerm.com](https://enriquekesslerm.com)
- [jzbor.de](https://jzbor.de)
- [licu.dev](https://licu.dev)
- [luciengheerbrant.com](https://luciengheerbrant.com)
- [lukoktonos.com](http://www.lukoktonos.com)
- [malloc.garden](https://malloc.garden)
- [mourelask.xyz](https://mourelask.xyz)
- [nbenedek.me](https://nbenedek.me)
- [notaplace.com](https://notaplace.com)
- [pyter.at](https://pyter.at)
- [rbd.gg](https://www.rbd.gg)
- [rerere.unlogic.co.uk](https://rerere.unlogic.co.uk)
- [siddharthsabron.in](https://siddharthsabron.in)
- [skaven.org](https://skaven.org)
- [sorcery.nexus](https://sorcery.nexus)
- [sorg.codeberg.page](https://sorg.codeberg.page)
- [sungsphinx.codeberg.page](https://sungsphinx.codeberg.page)
- [treeniks.github.io](https://treeniks.github.io)
- [vikramxd.github.io](https://vikramxd.github.io)
- [zorrn.net](https://www.zorrn.net)
- لك؟ <small>(لا تتردد في [الاتصال بي](https://daudix.codeberg.page/about/#contacts) أو إرسال طلب سحب)</small>

</details>

## في الاعتمادات

- [andreatitolo.com](https://www.andreatitolo.com/credits)
- [aplos.gxbs.me](https://aplos.gxbs.me)
- [archaeoramblings.com](https://www.archaeoramblings.com/credits)
- [oomfie.town](https://oomfie.town/credits)
- [veeronniecaw.space](https://veeronniecaw.space)

## مصادر الأصول

جميع مصادر أصول Duckquill متاحة [هنا](https://codeberg.org/daudix/archive/src/branch/main/duckquill/src) ومرخصة بموجب CC BY-SA 4.0. السبب في عدم وضع المصادر في نفس الريبو مثل Duckquill نفسه بسيط: أريده أن يكون صغيرًا قدر الإمكان، بحيث يكون استنساخ الريبو سريعًا ولا يجعل الموقع أثقل بكثير؛ وهذا أيضًا سبب استخدام العرض التوضيحي للصور عن بُعد بدلاً من النسخ المحلية.

## الاعتمادات

- [صورة الريشة المستخدمة في بطاقة البيانات الوصفية](https://commons.wikimedia.org/wiki/File:3quills.jpg)

## الأدوات المستخدمة

- [VSCodium](https://vscodium.com) - ثنائيات برمجيات مجانية/مفتوحة المصدر من كود VS
  - [Capitalize](https://marketplace.visualstudio.com/items?itemName=viablelab.capitalize) - كتابة العنوان بأحرف كبيرة بدون مواقع عشوائية.
  - [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django) - تيرا مشابه تمامًا لـ Liquid في بعض الأماكن.
  - [Even Better TOML](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml) - لـ 'config.toml' بشكل أساسي.
  - [Monokai Pro](https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode) - سمة جميلة للغاية.
  - [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss) - لست متأكدًا مما إذا كان يعمل بالفعل. ¯\\\_(ツ)_/¯
  - [فرز CSS](https://marketplace.visualstudio.com/items?itemName=piyushsarkar.sort-css-properties) - منقذ لخصائص CSS الطويلة.
- [أدوات مطوري فايرفوكس](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) - الأفضل من نوعه.

أما بالنسبة لمنسق الكود فأنا أستخدم أداة VSCodium المدمجة. Prettier جيد لكني لا أحب الطريقة التي يحاول بها جعل الكود يتناسب مع عمود ضيق جدًا، يمكن تغيير هذا بالطبع، لكن المنسق المدمج يقوم بعمله لذا لا أزعج نفسي بفعل ذلك.

## شكرًا لـ

- [ياكوب شتاينر](https://jimmac.eu) لـ [موقع مكون نظام التشغيل](https://jimmac.github.io/os-component-website)، والذي كان بمثابة نقطة انطلاق وإلهام.
- [كارل شوان](https://carlschwan.eu) لـ [التعليقات التي تعمل بالماستودون](https://carlschwan.eu/2020/12/29/adding-comments-to-your-static-blog-with-mastodon/).
- [جوناثان نيل](https://jonneal.dev) من أجل [normalize.css](https://csstools.github.io/normalize.css/).
- [مكدسات الخطوط الحديثة](https://modernfontstacks.com) من أجل مكدس خطوط النظام.
- كل من دعمني وقال أشياء جيدة <3
