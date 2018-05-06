// pages/star/star.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrls: [{

            url: '/lib/images/1.jpg'
        }, {

            url: '/lib/images/2.jpg'
        }, {

            url: '/lib/images/3.jpg'
        }],
        indicatorDots: true,
        autoplay: false,
        classify: [{
            text: "星品"
        }, {
            text: "星秀"
        }, {
            text: "星店"
        }, {
            text: "星记"
        }],
        clothes: [{
            img: '/lib/images/5.jpg',
            text: '刺绣皮衣外套'
        }, {
            img: '/lib/images/5.jpg',
            text: '接头个性烫订'

        }, {
            img: '/lib/images/5.jpg',
            text: '运动休闲长裤'

        }],
        youhui: [
          {
            img: '/lib/images/6.jpg',
            text: '双格子拼撞白色短袖T恤A',
            miaoshu:'AAAAAAAA',
            price:'998.00'
          },{
            img: '/lib/images/6.jpg',
            miaoshu:'BBBBBBBBB',
            text: '双格子拼撞白色短袖T恤B',
            price:'998.00'
          },{
            img: '/lib/images/6.jpg',
            miaoshu:'CCCCCCCCC',
            text: '双格子拼撞白色短袖T恤C',
            price:'998.00'
          },{
            miaoshu:'DDDDDDDDDD',
            img: '/lib/images/6.jpg',
            text: '双格子拼撞白色短袖T恤D',
            price:'998.00'
          }
        ],
        star:[
          {
            imgs:'/lib/images/8.png',
            name:'胡夏'
          },
          {
            imgs:'/lib/images/9.png',
            name:'胡夏'
          },
          {
            imgs:'/lib/images/10.png',
            name:'胡夏'
          },
          {
            imgs:'/lib/images/10.png',
            name:'胡夏'
          },
          {
            imgs:'/lib/images/9.png',
            name:'胡夏'
          },
          {
            imgs:'/lib/images/8.png',
            name:'胡夏'
          }
        
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})