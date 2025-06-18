"use client"
import IconButton from "./ui/IconButton"
import { css } from "../../styled-system/css"
import Button from "./ui/Button"
import AddCollectionIcon from "@/Icons/AddCollectionIcon"
import { CheveronDownIcon, SortIcon } from "@/Icons"
import { useTabActions, useActiveTab, tabs } from "@/store/tabNavigation"

const CollectionFilterBar = () => {
  const activeTab = useActiveTab()
  const { setActiveTab } = useTabActions()

  return (
    <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlockEnd: 4 })}>
      <div className={css({ display: 'flex', alignItems: 'center', gap: '2', padding: "11px 0" })}>
        <IconButton
          visual='outline'
          icon={<AddCollectionIcon size={14} />}
          className={css({ borderStyle: 'dashed', borderRadius: "full !important", display: { base: 'none', md: 'flex' } })}
        />
        {tabs.map((tab) => (
          <Button
            onClick={() => setActiveTab(tab)}
            key={tab.name} variant={activeTab.name === tab.name ? 'solid' : 'outline'}
            className={css({
              fontWeight: 500,
            })}
          >
            {tab.name}
          </Button>
        ))}
      </div>
      <SortMenu />
    </div>
  )
}

const SortMenu = () => {
  return (
    <div className={css({ display: 'flex', alignItems: 'center', gap: '2', padding: '11px 0' })}>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        })}
      >
        <div className={css({ display: { base: 'none', md: 'block' } })}>
          <p className={css({ fontSize: '10px', textAlign: 'end' })}>Sort By</p>
          <div className={css({ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'not-allowed' })}>
            <p className={css({
              fontWeight: 500,
              fontSize: '.75rem',
              minWidth: 'fit-content !important',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            })}
            >
              Created date
            </p>
            <div className={css({ display: 'flex', flexDirection: 'column', flexShrink: 0 })}>
              <CheveronDownIcon size={8} className={css({ transform: 'rotate(180deg)' })} color="#E51058" />
              <CheveronDownIcon size={8} />
            </div>
          </div>
        </div>
        <IconButton visual="outline" icon={<SortIcon size={14} />} className={css({ display: { base: 'none', md: 'flex' } })} />
      </div>
    </div>
  );
};

export default CollectionFilterBar