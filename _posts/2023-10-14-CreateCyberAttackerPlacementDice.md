---
title:  "Cyber Attacker Placement Dice"
categories: Babylon.js
outline: 知識が問われる
tags: 
- Babylon.js
- Blender
---

# Cyber Attacker Placement Dice

最近IPAが提供している[Cyber Attacker Placement](https://www.ipa.go.jp/jinzai/ics/core_human_resource/final_project/2023/cyber-attacker-placement.html)をやってみたところゲーム性はとても面白かった。しかし、、、
- 自動処理が多い（XX以下の時に〇〇を△△する。親版の始めに☆☆する。など）
- ダイスなどオブジェクトがPDFでしか提供されていないため紙で手作り

という点が面倒だった。
一瞬スマホアプリとして作ることも考えたが技術的、時間的にハードルが高かったのでせめて煩わしかったサイコロだけでもと思い作ってみました。（あわよくば、ゲームまシステムまで作る気になるかなと。作り終わった今現在はまだなっていないが）
https://yakatakaya.github.io/CyberAttackerPlacementDice/

# 技術要素
- 3Dモデリング
  - Blender
- 3Dエンジン
  - Babylon.js

Blenderはなんやかんや使ったことがなかったが使ってる人は見たことがある＋CADはそれなりに使えるので割と余裕。（そもそもサイコロのモデリングは初歩中の初歩）
問題はBabylon.js
Microsoft製ということもありドキュメントはそれなりに豊富。自由度が高いうえに機能は十分。しかし、日本語ドキュメントが少ないので辛かった。

## 3Dモデリング

- 正四面体、正六面体のモデル
  - https://qiita.com/SaitoTsutomu/items/4b977a8f75b30b369067
  - 上記を参照（多謝）
  - 正四面体は色々とめんどくさい計算が入ると思いきや、コーン（円錐）の円を荒くすれば四面体になるという考え方は数学が苦手な自分には目から鱗だった
- 作成したモデルに色を付けるのは分かれば簡単だった
  1. Edit Mode
  2. Select Modeを面にする
  3. プロパティ＞Materialから設定
- GLTFとしてエクスポート

## 3Dエンジン

- プロジェクトの作成
  - 公式ドキュメントを読めば余裕
    - https://doc.babylonjs.com/guidedLearning/createAGame/gettingSetUp
  - どうせならと思いTypescriptで書き始めた
- 3Dモデルの読み込み
  - `SceneLoader.ImportMeshAsync()`を使用。
  - 非同期と同期の使い分けはゲームエンジンとかになれていなさ過ぎてよくわからない。
- 物理エンジン
  - 物理エンジンはhavokというものを使用。ゼルダToKに使われているとかなんとか。
  - 重力、衝突判定の実装に一番時間がかかった
  - 一般的なゲームでは細かい衝突判定は必要ないため立方体などで省略することが多数の模様。３Dモデルのメッシュと同様の形の当たり判定を実現するのが面倒だった。（この点はUnityなどの方が圧倒的に簡単なのかも）
  - 一番参考にした実装は下記
    - https://playground.babylonjs.com/#LKPBW5
- クリックしたオブジェクトに力を加える
  - https://playground.babylonjs.com/#R66K4K#1
  - 物理エンジンに比べたら余裕で完了
- 作成したHTML＋Javascriptを公開
  - サーバーサイドの処理が一切ないためありがたくGithub Pagesを使用
    - https://zenn.dev/aya_ssbgc/articles/48c77f5a8ee56d
    - 見なくても何とかなった気はするがとても参考になりました。

## 所感

- 久しぶりに一からなにかを作りきった
- なんかたまに現実ではありえない挙動をするのは物理エンジンのせいにしていいですか？
- Babylon.jsが思ったより軽量だったので大量の３Dオブジェクトを描画したときにどんな感じで重くなるのか興味がわいてきた
- Unityの代替と言われているGodotも触ってみたい
