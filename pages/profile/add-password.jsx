import { Form, Input, Button, Row, Col } from 'antd'
import LayoutProfile from 'components/Layout/profile'

const AddPassword = () => {
  return(
    <>
      <LayoutProfile>
        <Form layout="vertical">
          <Row gutter={[10,10]}>
            <Col span={16}>
              <Form.Item label="New Password" name="password" className="m-b-10">
                <div>
                  <Input.Password className="w-100" placeholder="New Password" />
                </div>
              </Form.Item>
              <Form.Item label="Confirmation Password" name="confirmation_password" className="m-b-10">
                <div>
                  <Input.Password className="w-100" placeholder="Confirmation Password" />
                </div>
              </Form.Item>
              <Form.Item name="submit" className="m-b-0">
                <Button type="primary">Save</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </LayoutProfile>
    </>
  )
}

export default AddPassword
