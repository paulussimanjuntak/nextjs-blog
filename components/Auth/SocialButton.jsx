import { Button, Image, Row, Col } from 'antd'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import * as action from 'store/actions'

const GoogleLogo = '/static/images/google.svg'
const FacebookLogo = '/static/images/facebook.svg'

const SocialButton = ({ text }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const onLogin = () => {
    dispatch(action.login())
    router.replace('/')
  }

  return(
    <>
      <Row gutter={[15, 15]}>
        <Col lg={12} md={12} sm={12} xs={24}>
          <Button block className="btn-google btn-white" size="large" onClick={onLogin}>
            <Image width={18} src={GoogleLogo} preview={false} alt="GoogleLogo" />
            <b className="m-l-5 fs-14">{text} with Google</b>
          </Button>
        </Col>
        <Col lg={12} md={12} sm={12} xs={24}>
          <Button block className="ant-btn-blue btn-google" size="large" onClick={onLogin}>
            <Image width={18} src={FacebookLogo} preview={false} alt="FacebookLogo" />
            <b className="m-l-5 fs-14">{text} with Facebook</b>
          </Button>
        </Col>
      </Row>
      <style jsx>{`
        :global(.btn-google .ant-image) {
          vertical-align: sub!important;
        }

        .btn-signin {
          width: 50%!important;
        }

        @media (max-width: 959px) {
          .btn-signin {
            width: 100%!important;
          }
        }
        :global(.ant-btn-blue) {
          color: #ffffff!important;
          background: #1890ff!important;
          border-color: #1890ff!important;
          text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
          -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
        }
        :global(.btn-white) {
          color: #434343!important;
          background: white!important;
          border-color: #93999E!important;
          text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
          -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
          box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
        }
      `}</style>
    </>
  )
}

export default SocialButton
