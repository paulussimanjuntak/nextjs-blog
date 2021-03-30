import { Form, Input, Button, Upload, Row, Col, Select } from 'antd'
import { UserOutlined, HeartOutlined, UnlockOutlined } from '@ant-design/icons'

import LayoutProfile from 'components/Layout/profile'

const newFormImage = {
  file: { 
    value: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://picsum.photos/200/200?random=asd',
      },
    ]
  }
}

const Profile = () => {
  return(
    <>
      <LayoutProfile>
        <Row gutter={[10,10]}>
          <Col span={16}>
            <Row>
              <Col span={24}>
                <Form layout="vertical">
                  <Row gutter={[10,10]}>
                    <Col span={12}>
                      <Form.Item label="Username" name="username" className="m-b-10">
                        <div>
                          <Input className="w-100" placeholder="Username" value="GM 0Okky" />
                        </div>
                      </Form.Item>
                      <Form.Item label="Phone Number" name="telepon" className="m-b-10">
                        <div>
                          <Input className="w-100" placeholder="Phone Number" />
                        </div>
                      </Form.Item>
                    </Col>
                    <Col span={12}>
                      <Form.Item label="Email" name="email" className="m-b-10">
                        <div>
                          <Input className="w-100" placeholder="OkkyShanty@love.com" disabled />
                        </div>
                      </Form.Item>
                      <Form.Item label="Gender" name="gender" className="m-b-10">
                        <div>
                          <Select placeholder="Choose a gender">
                            <Select.Option value="male">Male</Select.Option>
                            <Select.Option value="female">Female</Select.Option>
                            <Select.Option value="other">Other</Select.Option>
                          </Select>
                        </div>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item name="submit" className="m-b-0">
                        <Button type="primary">Save</Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Col>
          <Col span={8} className="profile-photo">
            <div>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                fileList={newFormImage.file.value}
                showUploadList={{showRemoveIcon: false, showPreviewIcon: true}}
              >
              </Upload>
              <Upload
                accept="image/*"
                showUploadList={false}
              >
                <Button style={{ width: 'auto' }}>
                  Choose Photo
                </Button>
              </Upload>
              <p className="fs-12 m-t-5 text-secondary m-b-0">
                Image size: max 4 MB
              </p>
              <p className="fs-12 text-secondary m-t-0">
                Image format: .JPEG, .JPG, .PNG
              </p>
            </div>
          </Col>
        </Row>
      </LayoutProfile>
      <style jsx>{`
        :global(.avatar-uploader .ant-upload){
          vertical-align: middle;
          border-radius: 50%;
          margin-left: auto !important;
          margin-right: auto !important;
        }
        :global(.avatar-uploader .ant-upload-list-picture-card-container){
          margin-right: 0;
          border-radius: 50%;
        }
        :global(.avatar-uploader .ant-upload-list-item-info,
                .avatar-uploader .ant-upload-list-picture-card .ant-upload-list-item-info::before){
          border-radius: 50%;
          left: 0;
        }
        :global(.avatar-uploader .ant-upload-list-picture-card .ant-upload-list-item){
          padding: 5px;
          border-radius: 50%;
        }
        :global(.profile-photo){
          text-align: center;
        }
      `}</style>
    </>
  )
}

export default Profile
