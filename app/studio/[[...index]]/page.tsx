'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config' // 👈 ඔයාගේ root එකේ තියෙන sanity.config ෆයිල් එකට path එක

export default function StudioPage() {
  return <NextStudio config={config} />
}