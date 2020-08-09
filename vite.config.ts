/* import type { UserConfig } from 'vite'
import * as path from 'path'

const srcPath = path.resolve(__dirname, './src')

const config: UserConfig = {
  resolvers: [
    {
      fileToRequest(filePath) {
        console.log('@@@', filePath)
        if (filePath.startsWith(srcPath)) {
          return `/@/${path.relative(srcPath, filePath)}`
        }
      },
      requestToFile(publicPath) {
        if (publicPath.startsWith('/@/')) {
          return path.join(srcPath, publicPath.replace(/^\/@\//, ''))
        }
      }
    }
  ],
  root: './src'
}

export default config
 */
