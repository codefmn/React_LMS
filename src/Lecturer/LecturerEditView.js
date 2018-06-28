import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Form, Input, Button} from 'antd';

export default class LecturerEditView extends React.Component{
    constructor(){
        super();
        this.state={
            lecturer:{}
        }
    }

    handleInputChange(e){
        const {name, value} = e.target;
        const lecturer = {...this.state.lecturer};
        lecturer[name] = value;
        this.setState({ lecturer });
    }

    render(){
        const {lecturer} = this.state;
        return(
            <Layout>
                <Layout.Content>
                    <Form style={{padding:"15px 35px"}}>
                        <Form.Item>
                            <Input value={lecturer.Id} 
                                onChange={this.handleInputChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item>
                            <Input value={lecturer.Name} 
                                onChange={this.handleInputChange.bind(this)}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">Save</Button>&nbsp;
                            <Link to="/lecturers"><Button type="primary">Cancel</Button></Link>
                        </Form.Item>
                    </Form>
                </Layout.Content>
            </Layout>
        );
    }
}