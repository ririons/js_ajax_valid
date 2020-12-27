// お決まりのもの
// こう書くとDOMが作り終わった時にその中身の処理が実行される
$(function(){
  // ここに処理の中身を書いていく
  // 今回は、タイトルのフォームが入力されたらsubmitボタンが押せるようにする
  // それまではsubmitボタンはdisabled(非活性)とする

  // 1.タイトルフォームが入力された場合のイベントをセットする
  $('.js-input-validate').on('keyup',function(){
    // 2.タイトルフォームの中身(value)を取得して中身が入っているか確認
    // if文では、値が何かしらあればtrue,空ならfalseが返ってくる
    if($(this).value()){
      // 3.中身が入っているならsubmitを活性する
      $('.js-disabled-submit').prop('disabled',false);
    }else {
      // 4.中身が入っていなければ非活性に戻す
      $('.js-disabled-submit').prop('disabled',true);
    }
  });
});