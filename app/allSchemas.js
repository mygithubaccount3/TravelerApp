import Realm from 'realm';
export const USER_SCHEMA = "User";
export const POST_SCHEMA = "Post";

export const UserSchema = {
	name: USER_SCHEMA,
	primaryKey: 'id',
	properties: {
		id: 'int',
		username: {type: 'string', indexed: true},
		password: 'string',
		avatar: 'string',
		name: 'string',
		amount_of_posts: 'int',
		posts: 'Post[]'
	}
};

export const PostSchema = {
	name: POST_SCHEMA,
	primaryKey: 'id',
	properties: {
		id: 'int',
		image: 'string',
		title: 'string',
		likes: 'int',
    	bookmarks: 'int',
    	reviews: 'int',
		owner: {type: 'linkingObjects', objectType: 'User', property: 'posts'}
	}
}

const databaseOptions = {
	path: 'TravelerApp.realm',
	schema: [UserSchema, PostSchema]
};

export const registerUser = user => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		if (realm.objects(USER_SCHEMA).indexOf(user) === -1) {
				realm.write(() => {
				realm.create(USER_SCHEMA, user);
				resolve(user);
			});
		}
		else reject("User is already exist");
	}).catch((error) => reject(error));
});

export const signIn = (username, password) => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		if (realm.objects(USER_SCHEMA).filtered(`username = "${username}" && password = "${password}"`).length) {
			resolve();
		}
		else reject();
	}).catch((error) => reject(error));
});

export const getPosts = () => new Promise((resolve, reject) => {
	Realm.open(databaseOptions).then(realm => {
		if (realm.objects(POST_SCHEMA).length) {
			resolve(realm.objects(POST_SCHEMA));
		}
		else reject();
	}).catch((error) => reject(error));
})

export default new Realm(databaseOptions);
