"use client"
import { TickIcon } from "@/Icons";
import { useCollectionsActions, useIsEditing } from "@/store/collectionStore";
import { css } from "../../styled-system/css";
import ActionButtons from "./ActionButtons";
import SearchBar from "./Searchbar";
import Button from "./ui/Button";
import { AnimatePresence, motion } from "motion/react";

function Controls() {
  const isEditing = useIsEditing()
  return (
    <AnimatePresence mode="wait">
      {isEditing ? (
        <motion.div
          key="save-banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <SaveBanner />
        </motion.div>
      ) : (
        <motion.div
          key="controls"
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
          })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <SearchBar />
          <ActionButtons />
        </motion.div>
      )}
    </AnimatePresence>

  );
};

export default Controls


// Helper Components
function SaveBanner() {
  const { cancelRenameCollection, saveRenameCollection } = useCollectionsActions()
  return (
    <div className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '3',
      marginBlockEnd: '3.5625rem',
    })}>
      <p className={css({ color: "#717274", fontSize: "xs", maxWidth: '15.875rem', textAlign: "end" })}>All changes made to this section will reflect for all users in the content hub.</p>
      <div className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '2',
      })}>
        <Button variant="solid" className={css({ fontWeight: 500 })} onClick={() => saveRenameCollection()}>
          <span className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
            <TickIcon />
            <p>Save</p>
          </span>
        </Button>
        <Button
          variant="outline" className={css({ fontWeight: 500 })}
          onClick={() => cancelRenameCollection()}
        >
          Discard
        </Button>
      </div>
    </div>
  );
};