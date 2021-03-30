import { useState } from 'react'
import { Form, Input, Button, Upload } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import dynamic from 'next/dynamic'

const Editor = dynamic(import('components/Editor'), { ssr: false })

export const formImage = {
  file: { value: [], isValid: true, message: null },
}

const initial_data = {
  title: {
    value: "Understanding Nominee Agreements For Land Ownership In Bali"
  },
  description: {
    value: "<p><br></p><p class=\"jsx-2337118852\">In Indonesia, foreigners are prohibited to own a Hak Milk (freehold title) of land under the Indonesian Agrarian Law. Freehold lands only belong to Indonesian citizens.</p><p class=\"jsx-2337118852\">Foreigners are only entitled to Hak Pakai (leasehold title) of land, i.e. the right of use of land. Therefore, even a foreigner inherits a freehold land through a marriage with an Indonesian national, they will have to release the land by selling or granting it within a year upon the receipt of the land.</p><p class=\"jsx-2337118852\">If foreigners do not do so within the period specified by law, the inherited land will be taken by the state and the foreigner’s land ownership title will be removed as well.</p><p class=\"jsx-2337118852\">Legally, nominee agreements that leverage professional shareholder or director or commissioner services to transfer freehold lands to foreigners are not permitted as it does not conform to the legislation that was previously mentioned.</p><p class=\"jsx-2337118852\">However, there is always a solution. Foreigners can in fact take advantage of the binding power of nominee agreements to obtain land in Bali.</p>"
  }
}

const newFormImage = {
  file: { value: [
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://picsum.photos/200/150?random=asd',
      },
      {
        uid: '-2',
        name: 'image2.png',
        status: 'done',
        url: 'https://picsum.photos/200/150?random=kjl',
      }
    ]
  }
}

const UpdateArticles = () => {
  const [imageList, setImageList] = useState(newFormImage)

  return(
    <>
      <h1>Update Article</h1>
      <section className="m-t-20">
        <Form name="new-article" layout="vertical">
          <Form.Item label="Media" className="m-b-10">
            <Upload
              accept="image/*"
              listType="picture-card"
              fileList={imageList.file.value}
            >
              {imageList.file.value.length >= 4 ? null : 
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 4 }}>Upload</div>
                </div>
              }
            </Upload>
          </Form.Item>
          <Form.Item label="Title" className="m-b-10">
            <Input placeholder="Article Title" defaultValue={initial_data.title.value} />
          </Form.Item>
          <Form.Item label="Description" className="m-b-10">
            <Editor 
              initialValue={initial_data.description.value}
              setContent={(val) => console.log(JSON.stringify(val))} 
              height="200"
            />
          </Form.Item>
          <Form.Item className="m-b-10">
            <Button type="primary">Update</Button>
          </Form.Item>

        </Form>
      </section>
    </>
  )
}

export default UpdateArticles
