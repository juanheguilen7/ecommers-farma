'use client'

import React, { useRef, useState } from 'react'
import { signOut } from 'next-auth/react'
import { destroyCookie } from 'nookies';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Link from 'next/link';

const Action = ({ id, rol }: any) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleLogout = async () => {
        //Eliminar el localStorage
        localStorage.clear();
        // Eliminar la cookie de roles
        destroyCookie(null, 'auth');
        // Realizar el logout con NextAuth
        await signOut({ callbackUrl: '/' }); // Especifica la URL a la que redirigir después del logout
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };
    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <>
            <Button
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Image src={'/icons/user.svg'} width={25} height={25} alt='iconUser' />
            </Button>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Link href={`/profile/${id}`}>
                                            Profile
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <Link href={'/bookmark'}>Me gusta</Link>
                                    </MenuItem>
                                    {rol === 'admin' ?
                                        <MenuItem onClick={handleClose}>
                                            <Link href={'/create-product'}>Crear Producto
                                            </Link>
                                        </MenuItem>
                                        : null
                                    }
                                    <MenuItem onClick={handleLogout}>
                                        <span>Logout</span>
                                    </MenuItem>

                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>

        </>
    )
}

export default Action;