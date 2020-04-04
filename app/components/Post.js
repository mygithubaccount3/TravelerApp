import React, {useState, useEffect} from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import PostHeader from './PostHeader';

const Post: () => React$Node = (props) => {
	return (
		<View style={{alignItems: "center"}}>
			<PostHeader avatar={props.avatar} name={props.name} posts={props.posts} isFollowing={props.isFollowing} />
			<Image source={{uri: props.image}} style={{width: 375, height: 250, marginBottom: 16}} />
			<Text style={{fontFamily: "Lato-Bold", fontSize: 16, lineHeight: 19, color: "#5E6871", marginBottom: 13.5}}>{props.title}</Text>
			<View style={{width: 343, height: 1, opacity: 0.4, backgroundColor: "#979797", marginBottom: 9.5}} />
			<View style={{flexDirection: "row", justifyContent: "space-between", width: 350, marginBottom: 10}}>
				<View style={{flexDirection: "row", width: 100, justifyContent: "space-between"}}>
					<View style={{flexDirection: "row"}}>
						<Image source={require('../img/like.png')} style={{marginRight: 5}} />
						<Text>{props.likes}</Text>
					</View>
					<View style={{flexDirection: "row"}}>
						<Image source={require('../img/bookmark.png')} style={{marginRight: 5}} />
						<Text>{props.bookmarks}</Text>
					</View>
				</View>
				<Text>{props.reviews}</Text>
			</View> 
		</View>
	);
};

export default Post;
