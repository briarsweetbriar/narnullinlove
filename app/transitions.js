export default function() {
  this.transition(
    this.toRoute(() => true),
    this.use('toDown')
  );
}
