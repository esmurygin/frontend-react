import MainNavbar from '../components/navbar'
import style from '../styles/eventPage.module.css'
import Footer from '../components/footer'
import EventPageCard from '../components/eventPageCard'
import {useRouter} from 'next/router'
import { useState } from 'react'
import React from 'react'
import EventPage from '../components/eventPager'

export default function EventPageR() {
    const router = useRouter();
    return (
        <EventPage router={router} />
    );
}

