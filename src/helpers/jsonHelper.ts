const DATE_REGEXP = /^\d{4}[.\/-]\d{2}[.\/-]\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/g

export class JsonHelper {
  public static parse(data: string): any {
    return JSON.parse(data, JsonHelper.CustomStringParser)
  }

  private static CustomStringParser(key: string, value: any): any {
    if (typeof value === 'string') {
      /// Check if date fortmat
      let a = DATE_REGEXP.exec(value)
      if (a) {
        return new Date(value)
      }
    }

    return value
  }
}
