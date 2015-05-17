/**
 * Created by JYH on 2015-05-12.
 */

noticeSlideImages = new Mongo.Collection('noticeSlideImages');

/*
* 클라이언트에서 Posts = new Mongo.Collection('posts') 라고 선언하는 것은
 * 실제 Mongo 컬렉션의 로컬, 인-브라우저 캐시를 생성하는 것이다.
 * 즉, 클라이언트의 Mini Mongo에 posts라는 컬렉션을 생성한다는 말.
 *
 * 그러므로 클라이언트에서 Posts.find()를 호출하면 서버나 DB와 통신하지 않고
 * Mini Mongo에서 바로 꺼내 쓴다.
 *
 * 클라이언트와 서버 간의 통신을 위해선 pub/sub 과정이 필요하다.
 * Meteor.publish('posts', function(){
 *      return Posts.find();
 * });
 * Meteor.subscribe('posts');
 * 이렇게 서버에서 발행하고, 클라이언트에서 구독 신청을 하면
 * 지속적으로 동기화가 진행된다.
 *
 * Posts.findOne()
 * Posts.find(); //Posts컬렉션의 커서를 반환한다.
 * Posts.find().count();
 * Posts.find().fetch(); //현재 커서의 위치에서 데이터를 배열로 반환한다.
 * Posts.insert( { title : "tt", _id: abcd } ); //Json 문법으로 넣으면 된다.
 *
 * meteor reset // 데이터베이스 초기화
 *
 * Meteor.publish('posts', function(){
 *      return Posts.find( {flagged:false} );
 * }
 *
 * //Posts 컬렉션의 데이터 중 flagged가 false이고 author가 인자와 같은 것만 찾고 커서 반환.
 * Meteor.publish('posts', function( author ){
 *      return Posts.find( {flagged:false, author:author} );
 * }
 * Meteor.subscribe('posts', 'bob-smith');
*/