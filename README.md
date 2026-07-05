# せかいの国旗パズルゲーム

子ども向けの国旗パズルゲームです。国名に合うパーツを全部タップして、制限時間内に国旗を完成させます。
TOP画面でレベル設定を見て、好きなレベルから始められます。

## ファイル構成

- `index.html`: ゲーム画面
- `styles.css`: 見た目
- `script.js`: レベル設定、得点、ゲーム進行
- `_redirects`: Netlify DropでルートURLを `index.html` に向ける設定

## ローカルで遊ぶ

`index.html` をブラウザで開くと遊べます。

## ルール

- 正しいパーツを置くと `+1 ポイント`
- 間違えると残り時間が `-3秒`
- クリア時は残り時間ボーナスが入ります
- 最後まで進むと、合計ポイントでランクが出ます

## 家族へ共有する公開方法

### Netlify Drop

1. [Netlify Drop](https://app.netlify.com/drop) を開きます。
2. この `public` フォルダをドラッグ＆ドロップします。
3. 発行された `https://...netlify.app` のURLを家族へ送ります。

### GitHub Pages

GitHub CLIにログインできる状態なら、このフォルダをリポジトリへpushして Pages を有効化すると共有URLを発行できます。
