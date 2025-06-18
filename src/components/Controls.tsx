"use client"
import { TickIcon } from "@/Icons";
import { useIsEditing } from "@/store/collectionStore";
import { css } from "../../styled-system/css";
import ActionButtons from "./ActionButtons";
import SearchBar from "./Searchbar";
import Button from "./ui/Button";

function Controls() {
  const isEditing = useIsEditing()
  return (
    isEditing
      ? <SaveBanner />
      : <div className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
      })}>
        <SearchBar />
        <ActionButtons />
      </div>
  );
};

export default Controls


// Helper Components
function SaveBanner() {
  return (
    <div className={css({
      display: 'flex',
      alignItems: 'center',
      gap: '3',
    })}>
      <p className={css({ color: "#717274", fontSize: "xs", maxWidth: '15.875rem', textAlign: "end" })}>All changes made to this section will reflect for all users in the content hub.</p>
      <div className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '2',
      })}>
        <Button variant="solid" className={css({ fontWeight: 500 })}>
          <span className={css({ display: 'flex', alignItems: 'center', gap: '1.5' })}>
            <TickIcon />
            <p>Save</p>
          </span>
        </Button>
        <Button variant="outline" className={css({ fontWeight: 500 })}>
          Discard
        </Button>
      </div>
    </div>
  );
};