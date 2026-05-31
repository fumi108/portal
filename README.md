# HomeLab Portal

ホームラボ向けのシンプルなサービス一覧ポータル。  
静的 HTML + Python 簡易サーバーで動作する。

## 機能

- **サービスカード** — グリッド / リスト 表示切替
- **検索バー** — 名前・URL・説明・バッジを横断検索、マッチ文字をハイライト
- **カテゴリフィルター** — チップで絞り込み
- **矢印キーナビゲーション** — 検索結果を ↑↓ キーで移動、Enter で開く
- **メモ** — `memo.md` をブラウザ内で Markdown 表示・編集
  - ツールバー: B / I / 打ち消し / H1-H3 / リスト / 引用 / コード / テーブル / リンク / チェックリスト / 水平線
  - テーブル行追加（`+行`）/ 列追加（`+列`）
  - `?` ボタンでショートカット一覧表示（OS ごとに ⌘ / Ctrl を出し分け）
  - Tab → 2 スペースインデント、Shift+Tab で削除
  - Ctrl+Z でツールバー操作を Undo
  - 下書き自動保存（localStorage）— 編集中にリロードしても復元
- **services.js エディタ** — ブラウザから `services.js` を直接編集・保存

## キーボードショートカット

| キー | 操作 |
|------|------|
| `m` | memo 開閉 |
| `e` | 編集開始 |
| `⌘S` / `Ctrl+S` | 保存 |
| `Esc` | 編集キャンセル |
| `⌘B` / `Ctrl+B` | Bold |
| `⌘I` / `Ctrl+I` | Italic |
| `/` または `⌘K` | 検索フォーカス |
| `↑↓` | 検索結果ナビゲーション |
| `Enter` | フォーカス中のサービスを開く |

## セットアップ

```bash
python3 server.py 8765   # http://localhost:8765
```

サーバーは `GET`（静的配信）と `PUT /memo.md` / `PUT /services.js`（上書き保存）に対応。

## カスタマイズ

`services.js` を編集してサービス一覧を設定する。  
ブラウザ上の `services` ボタンからも編集可能。

### accent カラー一覧

`green` / `teal` / `amber` / `blue` / `red` / `purple`

### サービス定義例

```js
{
  icon: "🔧",
  name: "サービス名",
  url: "http://service.local",
  accent: "blue",
  badge: "tag",        // 空文字でバッジ非表示
  description: "説明",
}
```

## memo.md

`memo.md` は `.gitignore` 対象。個人のメモを自由に記述できる。  
ファイルが存在しない場合はメモ欄が空の状態で表示される。
