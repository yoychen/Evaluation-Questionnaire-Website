const React = require('react');
const ReactDOM = require('react-dom');

export default React.createClass({
  displayName: 'ReadMe',
  getInitialState: function() {
    return {
    };
  },
  render: function() {
    return (
      <div className="ques-form">

      <div className="ui form">
        <h4 className="ui dividing header">實驗說明</h4>
        <div style={{color: '#212325',fontWeight: 500}} >
          親愛的同學：<br/><br/>
        您好，非常感謝您抽空參加本實驗研究。<br/><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本實驗目的在瞭解購物網站中產品資訊呈現與客服狀態對購物的影響。您接下來在網站中，所提供的所有數據以及個人資訊，均會受到保護與保密，並僅限於學術研究用途，<b>絶</b>對不會公開，請您放心作答。<br/>
    <div style={{margin: '17px 5px'}}>
        整個實驗過程，約為15-20分鐘，總共有四個部份：<br/>
      <div style={{margin: '10px 0px',lineHeight: '1.8'}}>
            第一個部份：個人基本資料填寫；<br/>
            第二個部份：購物網站的瀏覽；<br/>
            第三個部份：網站瀏覽後的感受；<br/>
          </div>
        </div>
        <br/>
          再次謝謝您的協助！
          <h6 style={{textAlign:'right',margin: '1em',fontWeight: 500}} >資管系 陳美如老師 敬上</h6>
        </div>
        <div className="ui submit button" onClick={this.props.nextFlow} >下一步</div>
      </div>

      </div>
    );
  },
  componentDidMount: function() {
    //$('.checkbox').checkbox();
    // $('.fields .field:nth-child(2) label').each(function(index, el) {
    //   el.click();
    // });
  }
});
