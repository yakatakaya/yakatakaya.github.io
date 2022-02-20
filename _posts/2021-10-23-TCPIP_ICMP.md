---
title:  "TCP/IPを学ぶ ICMP"
categories: ネットワークスペシャリスト
tags:
- Linux
- Ubuntu
- TCP/IP

---

- [1. ICMP](#1-icmp)
  - [1.1. 基礎知識](#11-基礎知識)
  - [1.2. コマンド](#12-コマンド)

# 1. ICMP

## 1.1. 基礎知識

- Internet Control Message Protocol
- 有名なのは疎通確認を行うpingを打つプロトコル
- 疎通確認だけでなく、通信中に生じたエラーの通知などにも使われているらしい
- 通信にはIPを用いているらしい（インターネットが繋がっているか疎通確認しているわけだからそりゃそうか）
- OSI参照モデルの分類的にはネットワーク層

## 1.2. コマンド

`XXX.XXX.XX.X`に4回疎通確認のpingを打つ
```
$ ping -c XXX.XXX.XX.X
```




