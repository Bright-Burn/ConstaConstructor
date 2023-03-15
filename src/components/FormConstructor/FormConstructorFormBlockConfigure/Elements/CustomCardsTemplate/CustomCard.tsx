import style from './styles.module.css'
import { Text } from '@consta/uikit/Text'
import { Avatar } from '@consta/uikit/Avatar'
import { Badge } from '@consta/uikit/Badge'
import { Tag } from '@consta/uikit/Tag'
import { Card } from '@consta/uikit/Card'

import { IconUser } from '@consta/uikit/IconUser'
import { IconGeo } from '@consta/uikit/IconGeo'
import { IconFolders } from '@consta/uikit/IconFolders'

interface CustomCardProps {
  title: string
  contractorCompany: string
  location: string[]
  user: string
  tags: string[]
  status: string
  lastEditDate: string
  avatar: string | undefined
}

function CustomCard({
  title,
  contractorCompany,
  location,
  user,
  tags,
  status,
  lastEditDate,
  avatar,
}: CustomCardProps) {
  return (
    <div className={style.cards}>
      <Card className={style.card} verticalSpace='l' horizontalSpace='l' form='round'>
        <div className={style.card_title}>
          <Text weight='bold'>{title}</Text>
        </div>
        <div className={style.card_mid_content}>
          <div className={style.card_row}>
            <IconGeo size={'m'} view={'ghost'} />
            <div className={style.card_inner_row}>
              <Text weight='thin' className={style.text}>
                {contractorCompany} {' > '}
                {location}
              </Text>
            </div>
          </div>
          <div className={style.card_row}>
            <IconUser size={'m'} view={'ghost'} />
            <div className={style.card_inner_row}>
              <Text weight='thin'>{user}</Text>
            </div>
          </div>
          <div className={style.card_row}>
            <IconFolders size={'m'} view={'ghost'} />
            <div className={style.card_inner_row}>
              {
                // попробовать реализовать сокрытие невлезающих элементов с помощью табов
                //   <Tabs
                //   items={() => {
                //     tags.map(tag => <Tag label={tag} className="tags} />)
                //   }}
                // />
              }

              {tags.length <= 3
                ? tags.map(tag => <Tag mode='info' label={tag} className={style.tags} />)
                : tags
                    .slice()
                    .splice(0, 3)
                    .map(tag => <Tag mode='info' label={tag} className={style.tags} />)}
              {tags.length >= 3 ? (
                <Tag
                  className={style.tags}
                  mode='check'
                  onChange={() => {}}
                  label={'+' + (tags.length - 3)}
                  checked={false}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className={style.card_last_row}>
          <div className={style.card_last_row}>
            <Badge view='stroked' label={status} className='badge' />
            <Text view='secondary'>Изменено: {lastEditDate}</Text>
          </div>

          <Avatar url={avatar} />
        </div>
      </Card>
    </div>
  )
}

export default CustomCard
