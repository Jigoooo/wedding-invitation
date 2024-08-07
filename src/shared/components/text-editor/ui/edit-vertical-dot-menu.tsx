import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import MoreVert from '@mui/icons-material/MoreVert';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';

import { IconButton } from '@/shared/ui';

export function EditVerticalDotMenu({
  onClickModify,
  onClickDelete,
  onClickReport,
}: {
  onClickModify?: () => void;
  onClickDelete?: () => void;
  onClickReport?: () => void;
}) {
  return (
    <Dropdown>
      <MenuButton
        className={'selection-none'}
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
      >
        <MoreVert />
      </MenuButton>
      <Menu className={'selection-none'} sx={{ minWidth: 200, overflow: 'hidden' }} placement='bottom-end'>
        {onClickModify && (
          <>
            <MenuItem
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBlock: -0.5, pr: 0 }}
              onClick={onClickModify}
            >
              수정하기
              <ListItemDecorator>
                <Edit />
              </ListItemDecorator>
            </MenuItem>
            <ListDivider />
          </>
        )}
        {onClickDelete && (
          <MenuItem
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBlock: -0.5, pr: 0 }}
            variant='soft'
            color='danger'
            onClick={onClickDelete}
          >
            삭제하기
            <ListItemDecorator sx={{ color: 'inherit' }}>
              <DeleteForever />
            </ListItemDecorator>
          </MenuItem>
        )}
        {onClickReport && (
          <>
            <MenuItem
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBlock: -0.5, pr: 0 }}
              variant='soft'
              color='danger'
              onClick={onClickReport}
            >
              신고하기
              <ListItemDecorator sx={{ color: 'inherit' }}>
                <DeleteForever />
              </ListItemDecorator>
            </MenuItem>
          </>
        )}
      </Menu>
    </Dropdown>
  );
}
