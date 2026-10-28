import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const IS_WORKFLOW = `${process.env.NEXT_PUBLIC_APP_TYPE_WORKFLOW}` === 'true'
export const APP_INFO: AppInfo = {
  title: 'COR-情報抽出',
  description: 'もう手入力は不要です。
写真やPDFをアップロードするだけで、領収書・レシートの主要情報をわずか数秒で自動抽出。

下記のフォーマットで対応可能です。
.pdf .jpg jpeg .png

今すぐ試してみよう！！！',
  copyright: 'Bestofess',
  privacy_policy: '',
  default_language: 'Ja',
}

export const API_PREFIX = `${process.env.NEXT_PUBLIC_API_PREFIX || '/api'}`

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
