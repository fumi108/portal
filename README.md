# portal
簡易なポータルページ

## サービス一覧の編集

`nginx/html/services.js` を編集する。変更はリロードで即反映される。

```js
const SERVICES = {
  statusItems: [
    { label: "network online", color: "green" },
    // ...
  ],
  categories: [
    {
      label: "カテゴリ名",
      services: [
        {
          icon: "🔧",
          name: "サービス名",
          url: "http://service.local",
          accent: "blue",   // green / teal / amber / blue / red / purple
          badge: "tag",     // 空文字でバッジ非表示
          description: "説明文",
        },
      ],
    },
  ],
};
```
