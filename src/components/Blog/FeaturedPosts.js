import React from 'react';
import glamorous from 'glamorous';
import { isLoaded } from 'react-redux-firebase';
import { Grid, Row, Col } from 'react-flexbox-grid';

import SmallPostPreview from './SmallPostPreview';
import BioCard from '../BioCard';

const FeaturedPosts = ({largePosts, smallPosts, mediumPosts, authors}) => (
	<Grid fluid>
		<Col xs={12}>
		<Row center="xs">
		
		<Col xs={8} >
			<Row around="xs">
				<Col xs>
					{ 
						Object.keys(smallPosts).map(key => 
							<SmallPostPreview 
								key={key} 
								post={smallPosts[key]} 
								authors={authors} 
							/>
						) 
					}
				</Col>
				<Col xs>
					{ 
						Object.keys(smallPosts).map(key => 
							<SmallPostPreview 
								key={key} 
								post={smallPosts[key]} 
								authors={authors} 
							/>
						) 
					}
				</Col>				
				<Col>
					<BioCard 
						image={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1150197/cool-pattern.png'}
					/>
				</Col>
			</Row>
		</Col>

		</Row>
		</Col>
	</Grid>
)

export default FeaturedPosts;
