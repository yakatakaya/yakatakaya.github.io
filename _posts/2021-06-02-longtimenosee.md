---
title:  "Long Time No See"
categories: Jekyll
outline: ohisashiburi
---

久しぶりに書き方を思い出し中


jekyllを使った投稿方法の手順をなぜ残してなかったのか

# 環境構築

- Rubyをインストール
  - [https://rubyinstaller.org/downloads/]()
- 必要なものをインストール
```
gem install jekyll bundler
bundle install
```
  
# ローカルビルド

1. _postsフォルダに記事を追加する
2. VSCODEのターミナルで下記のコマンドを実行

```
bundle exec jekyll serve
```
