import Vue from 'vue'
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js'
import enUS from '@kangc/v-md-editor/lib/lang/en-US'

VMdEditor.lang.use('en-US', enUS)

VMdEditor.use(githubTheme)

Vue.use(VMdEditor)
