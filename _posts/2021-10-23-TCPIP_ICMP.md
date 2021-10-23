---
title:  "TCP/IPを学ぶ ICMP"
categories: ネットワークスペシャリスト
tags:
- Linux
- Ubuntu

---

# ICMP

## 基礎知識

- Internet Control Message Protocol
- 有名なのは疎通確認を行うpingを打つプロトコル
- 疎通確認だけでなく、通信中に生じたエラーの通知などにも使われているらしい
- 通信にはIPを用いているらしい（インターネットが繋がっているか疎通確認しているわけだからそりゃそうか）
- OSI参照モデルの分類的にはネットワーク層

## コマンド

`XXX.XXX.XX.X`に4回疎通確認のpingを打つ
```
$ ping -c XXX.XXX.XX.X
```




