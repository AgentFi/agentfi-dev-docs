import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HotLinks.module.css';
import clsx from 'clsx';

import { Icon, InlineIcon } from '@iconify/react';
import githubFill from '@iconify-icons/akar-icons/github-fill';

const HotLinkList = [
    {
        title: 'Github',
        link: 'https://github.com/AgentFi'
    }
]

function HotLink({title, link}) {
    return (
        <button className={styles.link}>
            <Link to={link} style={{ textDecoration: 'none' }}>
                <div className="row">
                    <InlineIcon icon={githubFill} width={25} height={25} />
                    <h4 style={{margin: '0', marginLeft: '1rem'}}>{title}</h4>
                </div>
            </Link>
        </button>
    )
}

export default function HotLinks () {
    return (
        <section className={styles.links}>
          <div className="container">
            <h3>Developer Links</h3>
            <center>
              <div className={clsx('col col--6')}>
                {HotLinkList.map((props, idx) => <HotLink key={idx} {...props} />)}
              </div>
            </center>
          </div>
        </section>
    )
}
