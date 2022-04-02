---
title:  "Rust Setup"
categories: Rust
outline: 何がいいんだろう。C++嫌いすぎて勉強してみる
tags:
- Rust


---

- [1. Rust言語のセットアップ](#1-rust言語のセットアップ)
  - [1.1. RustUpのインストール](#11-rustupのインストール)
  - [1.2. VScodeの拡張機能インストール](#12-vscodeの拡張機能インストール)
  - [1.3. Hello world](#13-hello-world)


# 1. Rust言語のセットアップ

- C++嫌いすぎて

## 1.1. RustUpのインストール

- ここから適当にインストールする
  - [https://www.rust-lang.org/ja/tools/install/](https://www.rust-lang.org/ja/tools/install/)


## 1.2. VScodeの拡張機能インストール

- これがよさげ
  - [https://marketplace.visualstudio.com/items?itemName=swellaby.rust-pack](https://marketplace.visualstudio.com/items?itemName=swellaby.rust-pack)

## 1.3. Hello world

1. 下記コマンドを実行して新規プロジェクト作成的な漢字
2. `Ctrl+Shift+B`でビルド
3. debugフォルダが作られる
4. その中にSample.exe発見

```
cargo new Sample
```

簡単だった
