import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author="Sam" timeago="today at 4:45pm" comments="Yay" avatar={faker.image.avatar()} />
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author="Santa" timeago="today at 6:45pm" comments="Yay" avatar={faker.image.avatar()} />
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author="Smelly" timeago="today at 5:45pm" comments="Yay" avatar={faker.image.avatar()} />
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author="Steve" timeago="today at 7:45pm" comments="Yay" avatar={faker.image.avatar()} />
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail author="Silly" timeago="today at 2:45pm" comments="Yay" avatar={faker.image.avatar()} />
			</ApprovalCard>
		</div>
	);

};



ReactDOM.render(<App />, document.querySelector('#root'));