import React from 'react';
import { Avatar, Divider } from 'antd';
import '../styles/components/author.css'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'


const Author = () => {

  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size ={100} src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/c9aa4289f8401441a38967d02dad2b38~300x300.image" />
      </div>
      <div className="author-introduction">
        专注于前端开发
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<QqOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
      </div>
    </div>
  )
}

export default Author