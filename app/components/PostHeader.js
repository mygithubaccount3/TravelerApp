import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const PostHeader: () => React$Node = (props) => {
	const isPortrait = () => {
		const dim = Dimensions.get('screen');
		return dim.height >= dim.width;
	};
	let [orientation, setOrientation] = useState(
		isPortrait() ? 'portrait' : 'landscape',
	);
	useEffect(() => {
		Dimensions.addEventListener('change', () => {
			setOrientation(isPortrait() ? 'portrait' : 'landscape');
		});
	
		return function cleanup() {
			Dimensions.removeEventListener('change', () => {
				setOrientation(isPortrait() ? 'portrait' : 'landscape');
			});
		};
	}, []);

	return (
		<View style={{flexDirection: "row", justifyContent: "space-between", width: 349, height: 66, alignItems: "center"}}>
			<View style={{flexDirection: "row"}}>
				<Image
	         		source={{uri: props.avatar}}
	         		style={{width: 40, height: 40, marginRight: 12}}
	       		/>
				<View>
					<Text style={{fontFamily: "Lato-Bold", fontSize: 16, lineHeight: 19, color: "#589442"}}>{props.name}</Text>
					<Text style={{fontFamily: "Lato-Bold", fontSize: 12, lineHeight: 14, color: "#4A4A4A"}}>{props.posts} {props.posts > 1 ? "posts" : "post"}</Text>
				</View>
			</View>
			<TouchableOpacity style={styles.followButton}><Text style={{fontFamily: "Lato-Bold", fontSize: 15, lineHeight: 18, color: "#589442"}}>{props.isFolowing ? "Unfollow" : "Follow"}</Text></TouchableOpacity>
    	</View>
	);
};

const styles = StyleSheet.create({
	header: {
	    backgroundColor: '#589442',
	    height: 49,
	    alignItems: 'center',
	    justifyContent: 'center'
	},
	followButton: {
		borderColor: "#589442",
		borderWidth: 1,
		borderRadius: 4,
		justifyContent: "center",
		alignItems: "center",
		width: 64,
		height: 24
	}
});

export default PostHeader;
