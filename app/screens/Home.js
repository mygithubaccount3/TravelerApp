import React, {useState, useEffect} from 'react';
import {Dimensions, Image, StyleSheet, View, FlatList} from 'react-native';
import {connect} from "react-redux";
import {getPosts} from '../allSchemas';
import Post from "../components/Post";

const Home: () => React$Node = (props) => {
	let [posts, setPosts] = useState([]);
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
	
		getPosts(props.username).then((data) => {
			setPosts([...data]);
		})
	
		return function cleanup() {
			Dimensions.removeEventListener('change', () => {
				setOrientation(isPortrait() ? 'portrait' : 'landscape');
			});
		};
	}, []);
	
	return (
		<View
			style={
				orientation === 'portrait'
					? styles.loginScreen
					: styles.loginScreenLandscape
			}>
				<View style={styles.header}>
				    <Image
					    source={require('../img/plane.png')}
					    style={{width: 25, height: 24}}
				    />
			    </View>
				<FlatList
					data={posts}
					renderItem={({ item }) => <Post
												avatar={item.owner[0].avatar}
												name={item.owner[0].name}
												posts={item.owner.amount_of_posts}
												isFollowing={false}
												image={item.image}
												title={item.title}
												likes={item.likes}
												bookmarks={item.bookmarks}
												reviews={item.reviews}
											  />}
					keyExtractor={item => item.id.toString()}
					ItemSeparatorComponent={
		            	() => <View style={{ width: "100%", backgroundColor: '#D8D8D8', opacity: 0.2, height: 12 }}/>
		        	}
				/>
		</View>
	);
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#589442',
    height: 49,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return { username: state.username };
};

export default connect(mapStateToProps)(Home);
