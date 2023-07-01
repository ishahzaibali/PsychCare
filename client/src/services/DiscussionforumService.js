import GenericService from './GenericService';
class DiscussionforumService extends GenericService {
	addDiscussionforum = (data) => this.post('discussionforums', data);
	//{this is how sample data will be
	//   "user_id": "643d6a2f5fe5fd1ddcdaec62", // ObjectId of the user who created the post
	//   "category": "depression",
	//   "title": "how to cope with this",
	//   "description": "This is an example how to cope with this situation."

	// }

	deleteDiscussionforum = (_id) => this.delete('discussionforums/' + _id);

	//this will update any field title category or description
	updateDiscussionforum = (_id, data) =>
		this.put('discussionforums/' + _id, data);

	// id is of discussion forum id data will be like this,,,,"user_id": "643d6a2f5fe5fd1ddcdaec62", // ObjectId of the user who commented   "content": "This is a comment on the post."
	commentDiscussionforum = (_id, data) =>
		this.put('discussionforums/comment/' + _id, data);

	//if category not given it will give send response from all categories
	getDiscussionforums = () =>
		this.get('discussionforums?category=depression&perPage=10&page=2');
	getSingleDiscussionforum = (id) => this.get('discussionforums/' + id);
}

let discussionforumService = new DiscussionforumService();
export default discussionforumService;
