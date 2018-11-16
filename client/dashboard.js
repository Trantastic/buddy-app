import React from 'react';
import { Link } from 'gatsby'
import { Button, UncontrolledTooltip } from 'reactstrap';
import Layout from '../components/layout';

const Dashboard = () => (
	<Layout> 
	<h5 style={{textAlign:'center'}}>Please click to proceed</h5>
	<div style={{ marginTop: '8em' }}>
		<div >
		<Link to="/faq_page/"><Button className="mx-auto" style={{ width: '50%', marginBottom: '1em' }} color="primary" size="lg" block id="voterReg">Voter Registration</Button></Link>
		<Link to="#"><Button className="mx-auto" style={{ width: '50%', marginBottom: '1em' }} color="primary" size="lg" block id="polling">Polling Locations & Deadlines</Button></Link>
		<Link to="candidates"><Button className="mx-auto" style={{ width: '50%' }} color="primary" size="lg" block id="cand">Candidates</Button></Link>
	</div>

		<UncontrolledTooltip placement="top" target="voterReg">
        Get answers to frequently asked questions
		</UncontrolledTooltip>
		<UncontrolledTooltip placement="bottom" target="polling">
		Find your local polling location and deadline
		</UncontrolledTooltip>
		<UncontrolledTooltip placement="bottom" target="cand">
		Information on your local candidates
		</UncontrolledTooltip>
		
	</div>
	</Layout>
)

export default Dashboard;
