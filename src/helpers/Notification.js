/* eslint-disable no-class-assign */
/* eslint-disable no-undef */
class Notif {
  success () {
    this.$notify({
      type: 'success',
      layout: 'topLeft',
      text: this.$t('created'),
      timeout: 1500
    })
  }

  alert () {
    new Noty({
      type: 'alert',
      layout: 'topRight',
      text: 'Are you Sure?',
      timeout: 1000

    }).show()
  }

  error () {
    new Noty({
      type: 'alert',
      layout: 'topRight',
      text: 'Something Went Wrong ! ',
      timeout: 1000

    }).show()
  }

  warning () {
    new Noty({
      type: 'warning',
      layout: 'topRight',
      text: 'Opps Wrong ! ',
      timeout: 1000

    }).show()
  }
}
export default Notif = new Notif()
