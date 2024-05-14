---
title: "std::vector<T>の代入時の要素ごとの代入演算子について"
categories: c++
outline: 仕事中に学んだこと
---

# std::vectorに代入時の要素ごとの代入演算子

下記を実行した際にTestクラスの代入演算子が呼ばれるかというとそういうわけではなかった。
```cpp
std::vector<Test> vTest = std::vector<Test>();
vTest.push_back(Test("A"));
vTest.push_back(Test("B"));
vTest.push_back(Test("C"));

std::vector<Test> vTest2 = vTest;
```

下記なら呼ばれる。
```cpp
std::vector<Test> vTest = std::vector<Test>();
vTest.push_back(Test("A"));
vTest.push_back(Test("B"));
vTest.push_back(Test("C"));

std::vector<Test> vTest3 = std::vector<Test>(vTest.size());
std::vector<Test> vTest3 = vTest;
```

違いは、代入されるvectorのサイズ。
`代入されるvectorのサイズ >= 代入するvectorサイズ`
なら代入される側のvectorは何も考慮せず値をコピーするだけで良いが、
`代入されるvectorのサイズ < 代入するvectorサイズ`
の時はC言語のmallocのような容量の再割り当てが必要となる。その際の要素のコピーには代入演算子を使わないため代入演算子が呼ばれなくなる模様。

これだからC++は、、、

参考にしたのは下記ページ

[](https://qiita.com/dono3/items/af09c8512e49f174f1b5)
